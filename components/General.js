import React from 'react'
import { Collapse, Text } from "@nextui-org/react";


const General = () => {
    return (
        <div className="vegetariancontainer">
            <div className='cb' id="cb">
                <h1>Bulk (Gain Mass)</h1>
                <Collapse.Group>
                    <Collapse title="Day 1">
                        <ul>
                            <li>Breakfast: 6 egg omelette with spinach (approx. 564 kcal) </li><br></br>
                            <li>Lunch: Double chicken breast, broccoli and rice (approx.700 kcal) </li><br></br>
                            <li>Dinner: Tuna steak with olive oil, two sweet potatoes and quinoa (approx. 800 kcal) </li><br></br>
                            <li>Snack: strawberry-banana protein shake/chocolate-banana protein shake</li><br></br>

                        </ul>


                    </Collapse>
                    <Collapse title="Day 2">
                        <Text>
                            <ul>
                                <li>Breakfast: Large portion of granola, whole milk and sliced banana (approx.750 kcal)</li><br></br>
                                <li>Lunch: Salmon, sweet potatoes and sesame seeds (approx. 700 kcal) </li><br></br>
                                <li>Dinner: Sirloin steak, white rice and fried egg (approx. 950 kcal) </li><br></br>
                                <li>Snack: Small portion of chicken breast, tomatoes, celery and brown rice (approx.450 kcal) </li><br></br>

                            </ul>

                        </Text>
                    </Collapse>
                    <Collapse title="Day 3">
                        <Text>
                            <ul>
                                <li>Breakfast: 1 or 2 bagels with peanut butter (approx. 380/760 kcal) </li><br></br>
                                <li>Lunch: Chicken breast, salsa, brown rice and peppers (approx.720 kcal) </li><br></br>
                                <li>Dinner: Burger with lean beef, fries, white bread roll, cup of green beans (approx. 1450 kcal) </li><br></br>
                                <li>Snack: Beef Jerky (approx. 410 kcal) </li><br></br>

                            </ul>

                        </Text>
                    </Collapse>
                    <Collapse title="Day 4">
                        <Text>
                            <ul>
                                <li>Breakfast: 2 Poached eggs, salmon and avocado (approx. 550 kcal) </li><br></br>
                                <li>Lunch: Vegetarian bean chili burritos (approx. 900 kcal) </li><br></br>
                                <li>Dinner: Tuna, pasta and Bolognese sauce (approx. 600 kcal) </li><br></br>
                                <li>Snack: Cup of mixed nuts (approx. 640 kcal) </li><br></br>

                            </ul>

                        </Text>
                    </Collapse>
                    <Collapse title="Day 5">
                        <Text>
                            <ul>
                                <li>Breakfast: 6 egg omelette with spinach (approx. 564 kcal) </li><br></br>
                                <li>Lunch: Tinned tuna, quinoa, avocado and broccoli (approx. 500 kcal)</li><br></br>
                                <li>Dinner: Chili con carne with rolls of bread (approx. 700 kcal)</li><br></br>
                                <li>Snack: Mass gainer shake (approx. 600 kcal) </li><br></br>

                            </ul>

                        </Text>
                    </Collapse>
                </Collapse.Group>
            </div>
            <div className='cb' id="cb">
                <h1>Cut (Shred Down)</h1>
                <Collapse.Group>
                    <Collapse title="Day 1">
                        <ul>
                            <li>Breakfast: steel-cut oats with apples, peanut butter, and cinnamon</li><br></br>
                            <li>Lunch: a salad with greens, hard-boiled eggs, avocado, tomatoes, and balsamic vinaigrette </li><br></br>
                            <li>Dinner: black-bean soup with a dollop of Greek yogurt, whole-grain bread, and a side salad</li><br></br>
                            <li>Snack: Apple with peanut butter (approx. 200 kcal)</li><br></br>

                        </ul>


                    </Collapse>
                    <Collapse title="Day 2">
                        <Text>
                            <ul>
                                <li>Breakfast: scrambled eggs with broccoli and cheddar, plus a side of berries</li><br></br>
                                <li>Lunch: a burrito bowl with brown rice, pinto beans, tomato, onion, and avocado</li><br></br>
                                <li>Dinner: zucchini noodles with marinara, sunflower seeds, and white beans</li><br></br>
                                <li>Snack: string cheese or an orange</li><br></br>

                            </ul>

                        </Text>
                    </Collapse>
                    <Collapse title="Day 3">
                        <Text>
                            <ul>
                                <li>Breakfast: plain Greek yogurt with pineapple, shredded coconut, and walnuts</li><br></br>
                                <li>Lunch: lentil soup, chopped bell peppers, and guacamole </li><br></br>
                                <li>Dinner: eggplant Parmesan served over whole-grain pasta and green beans</li><br></br>
                                <li>Snack: a whole-grain granola bar or berries</li><br></br>

                            </ul>

                        </Text>
                    </Collapse>
                    <Collapse title="Day 4">
                        <Text>
                            <ul>
                                <li>Breakfast: a smoothie bowl made from unsweetened almond milk, spinach, hemp seeds, frozen berries, and a banana</li><br></br>
                                <li>Lunch: an egg salad on whole-grain bread with strawberries, carrots, and hummus</li><br></br>
                                <li>Dinner: stir-fry with tofu, carrots, broccoli, brown rice, soy sauce, and honey</li><br></br>
                                <li>Snack: dried mango and pistachios</li><br></br>

                            </ul>

                        </Text>
                    </Collapse>
                    <Collapse title="Day 5">
                        <Text>
                            <ul>
                                <li>Breakfast: two eggs and one slice of whole-grain toast with avocado, plus a side of grapes</li><br></br>
                                <li>Lunch: a salad with kale, pecans, dried cranberries, goat cheese, and edamame</li><br></br>
                                <li>Dinner: homemade chickpea patties alongside sautéed mushrooms and a baked sweet potato</li><br></br>
                                <li>Snack: plain Greek yogurt with cherries</li><br></br>

                            </ul>

                        </Text>
                    </Collapse>
                </Collapse.Group>

            </div>

        </div>
    )
}
export default General;