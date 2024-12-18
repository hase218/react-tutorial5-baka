function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

export default async (req) => {
    const x = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const y = ["the soup kitchen", "Disneyland", "the White House"];
    const z = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

    const xItem = randomValueFromArray(x);
    const yItem = randomValueFromArray(y);
    const zItem = randomValueFromArray(z);

    const input = await req.json();
    const name = input.nameData;
    const ukus = input.ukusData;

    const story = 
        `It was ${ukus === "us" ? "94 fahrenheit" : "34 celsius"} outside, so ${xItem} went for a walk.\
        When theygot to ${yItem}, they stared in horror for a few moments, then ${zItem}.\
        ${name === "" ? "Bob" : name} saw the whole thing, \
        but was not surprised — ${xItem} weighs ${ukus === "us" ? "300 pounds" : "21 stone"} and it was a hot day.`;
    
    return new Response(JSON.stringify(story));
};