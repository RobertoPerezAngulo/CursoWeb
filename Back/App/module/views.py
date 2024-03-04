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
            response = requests.get(f"https://pokeapi.co/api/v2/ability/{index}")
            data = response.json()
            name_in_spanish = next((name['name'] for name in data['names'] if name['language']['name'] == 'es'), None)
            description_in_spanish = next((flavor['flavor_text'] for flavor in data['flavor_text_entries'] if flavor['language']['name'] == 'es'), None)
            collections.append({"id": index,"name": item.get("name"),"img": f"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{index}.png","desc": description_in_spanish})
        return Response(collections)
