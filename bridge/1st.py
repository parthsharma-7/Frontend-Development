from collections import defaultdict

def solve():
    n = int(input().strip())
    recipes = defaultdict(list)

    for _ in range(n):
        line = input().strip()
        potion, ingredients = line.split("=")
        ingredients = ingredients.split("+")
        recipes[potion].append(ingredients)

    target = input().strip()

    memo = {}

    def min_cost(potion):
        if potion in memo:
            return memo[potion]

        # Base case: item (not brewable)
        if potion not in recipes:
            memo[potion] = 0
            return 0

        best = float("inf")
        for ingredients in recipes[potion]:
            cost = (len(ingredients) - 1) + sum(min_cost(x) for x in ingredients)
            best = min(best, cost)

        memo[potion] = best
        return best

    print(min_cost(target))
