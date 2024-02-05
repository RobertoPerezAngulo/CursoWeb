from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests

class PokemonsViewers(APIView):
    def get(self, request, *args, **kwargs):
        response = requests.get("https://pokeapi.co/api/v2/pokemon/?offset=1&limit=20")
        data = response.json()
        collections = []
        offset = 2
        for index, item in enumerate(data.get('results'), start=offset):
            collections.append({"name": item.get("name"),"img": f"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{index}.png"})
        return Response(collections)
