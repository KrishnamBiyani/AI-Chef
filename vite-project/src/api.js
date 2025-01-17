// import { HfInference } from '@huggingface/inference'

// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
// `

// const hf=new HfInference(import.meta.env.VITE_HF_API_KEY);

// export async function getRecipe(ingredientsarr){
//     const ingredientsstring=ingredientsarr.join(", ");
//     try{
//         const response=(
//             {
//                 model:"mistralai/Mixtral-8x7B-Instruct-v0.1",
//                 messages:[
//                     {
//                         role:"system",
//                         content : SYSTEM_PROMPT
//                     },
//                     {
//                         role:"user",
//                         content:`I have ${ingredientsstring}. Please give me a recipe you'd recommend I make!`
//                     }
//                 ],
//                 max_tokens: 1024
//             }
//         )
//         return response.choices[0].message.content
//     }catch(err){
//         console.log(err.message);
//     }
// }


// import { HfInference } from "@huggingface/inference";

// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
// `;

// const hf = new HfInference(import.meta.env.VITE_HF_API_KEY);

// export async function getRecipe(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(", ");
//     try {
//         const response = await hf.conversational({
//             model: "mistralai/Mixtral-8x7B-Instruct-v0.1", // Replace with a suitable Hugging Face conversational model
//             inputs: {
//                 past_user_inputs: [], // Optional: Add conversation context here
//                 generated_responses: [], // Optional: Add previous responses here
//                 text: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
//             },
//             parameters: {
//                 max_new_tokens: 1024,
//             },
//         });

//         // Return the generated text
//         return response.generated_text;
//     } catch (err) {
//         console.error("Error fetching recipe:", err.message);
//         throw err;
//     }
// }

import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

const hf = new HfInference(import.meta.env.VITE_HF_API_KEY);


// export async function getRecipe(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(", ");
//     try {
//         const response = await hf.textGeneration({
//             model: "mistralai/Mixtral-8x7B-Instruct-v0.1", // Use a supported text-generation model
//             inputs: `
//                 ${SYSTEM_PROMPT}
//                 User: I have ${ingredientsString}. Please give me a recipe you'd recommend I make!
//                 Assistant:`,
//             parameters: {
//                 max_new_tokens: 200,
//                 temperature: 0.5, // Controls creativity
//             },
//         });
//         console.log("response :" ,response);
//         return response.generated_text; // Return the generated recipe text
//     } catch (err) {
//         console.error("Error fetching recipe:", err.message);
//         throw err;
//     }
// }


export async function getRecipe(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.3",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}
