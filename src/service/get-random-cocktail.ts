export interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: null | string;
    strTags: null | string;
    strVideo: null | string;
    strCategory: string;
    strIBA: null | string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsES: string;
    strInstructionsDE: string;
    strInstructionsFR: null | string;
    strInstructionsIT: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: null | string;
    // Continue for other ingredients if necessary
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: null | string;
    // Continue for other measures if necessary
    strImageSource?:  string;
    strImageAttribution: null | string;
    strCreativeCommonsConfirmed: string;
    dateModified: string;
}

interface DrinksData {
    drinks: Drink[];
}


export async function getRandomCocktail(): Promise<DrinksData>{
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    return await response.json()
}

  