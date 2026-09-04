import json
import os
from pathlib import Path

from django.http import FileResponse, Http404, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from openai import OpenAI

FRONTEND_DIST = (
    Path(__file__).resolve().parent.parent.parent / "frontend" / "dist"
)


def spa(request, path=""):
    if path:
        file_path = FRONTEND_DIST / path
        if file_path.is_file():
            return FileResponse(open(file_path, "rb"))
    index = FRONTEND_DIST / "index.html"
    if index.is_file():
        return FileResponse(open(index, "rb"))
    raise Http404("Frontend not built. Run `npm run build` inside frontend/.")


@csrf_exempt
def chatgpt(request):
    if request.method != "POST":
        return JsonResponse({"error": "Solo se permiten peticiones POST"}, status=405)

    try:
        body = json.loads(request.body)
        prompt = body.get("prompt", "")
    except (json.JSONDecodeError, KeyError):
        return JsonResponse({"error": "JSON inválido"}, status=400)

    if not prompt:
        return JsonResponse({"error": "El campo 'prompt' es obligatorio"}, status=400)

    try:
        client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
        )
        return JsonResponse({"response": completion.choices[0].message.content})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)