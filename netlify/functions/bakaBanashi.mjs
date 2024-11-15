function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

export default async () => {
    const x = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const y = ["the soup kitchen", "Disneyland", "the White House"];
    const z = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

    const xItem = randomValueFromArray(x);
    const yItem = randomValueFromArray(y);
    const zItem = randomValueFromArray(z);

    const story = `It was 94 fahrenheit outside, \
                    so ${xItem} went for a walk.\
                    When theygot to ${yItem}, they stared in horror for a few moments, then ${zItem}.\
                    Bob saw the whole thing, \
                    but was not surprised — ${xItem} weighs 300 pounds and it was a hot day.`;
    

    return new Response(JSON.stringify(story));
};