import React from 'react'
import { Collapse, Text } from "@nextui-org/react";


const Vegetarian = () => {
    return (
        <div className="vegetariancontainer">
            <div className='cb' id="cb">
                <h1>Vegetarian Bulk (Gain Mass)</h1>
                <Collapse.Group>
                    <Collapse title="Day 1">
                        <ul>
                            <li>Breakfast: protein oatmeal made with oats, vegan protein powder, soy milk, banana, and peanut butter</li><br></br>
                            <li>Lunch: tofu stir-fry made with extra firm tofu, vegan pasta, beans, red lentils, celery, onion, and spinach </li><br></br>
                            <li>Dinner: teriyaki tempeh with broccoli and quinoa</li><br></br>
                            <li>Snack: strawberry-banana protein shake/chocolate-banana protein shake</li><br></br>

                        </ul>


                    </Collapse>
                    <Collapse title="Day 2">
                        <Text>
                            <ul>
                                <li>Breakfast: breakfast burritos made with tofu scramble and vegetables on vegan tortillas</li><br></br>
                                <li>Lunch: lentil loaf made with lentils, kidney beans, veggies, and nutritional yeast</li><br></br>
                                <li>Dinner: black-bean veggie burger with sweet potato fries</li><br></br>
                                <li>Snack: peanut butter and oatmeal snack bars </li><br></br>

                            </ul>

                        </Text>
                    </Collapse>
                    <Collapse title="Day 3">
                        <Text>
                            <ul>
                                <li>Breakfast: hummus toast made with sprouted grain bread, hummus, hemp seeds, and sunflower seeds</li><br></br>
                                <li>Lunch: vegan burrito bowl made with rice, beans, and homemade mock taco meat  </li><br></br>
                                <li>Dinner: sweet-and-sour stir-fry made with tofu, rice noodles, and vegetables</li><br></br>
                                <li>Snack: mock tuna salad sandwich</li><br></br>

                            </ul>

                        </Text>
                    </Collapse>
                    <Collapse title="Day 4">
                        <Text>
                            <ul>
                                <li>Breakfast: chocolate-peanut-butter smoothie bowl made with bananas, peanut butter, almond milk, vegan protein powder, and cocoa powder</li><br></br>
                                <li>Lunch: black bean and quinoa “meat” balls over whole grain vegan pasta</li><br></br>
                                <li>Dinner: vegan chili with tofu mince, kidney beans, tomatoes, and red lentils</li><br></br>
                                <li>Snack: roasted chickpeas with red pepper flakes</li><br></br>

                            </ul>

                        </Text>
                    </Collapse>
                    <Collapse title="Day 5">
                        <Text>
                            <ul>
                                <li>Breakfast: protein pancakes made with whole grain flour and vegan protein powder with toppings of your choice</li><br></br>
                                <li>Lunch: coconut-tofu-curry stir-fry made with tofu, soba noodles, and edamame</li><br></br>
                                <li>Dinner: vegan sloppy joe made with lentils and veggies</li><br></br>
                                <li>Snack: chocolate-peanut-butter protein shake</li><br></br>

                            </ul>

                        </Text>
                    </Collapse>
                </Collapse.Group>
            </div>
            <div className='cb' id="cb">
                <h1> Vegetarian Cut (Shred Down)</h1>
                <Collapse.Group>
                    <Collapse title="Day 1">
                        <ul>
                            <li>Breakfast: steel-cut oats with apples, peanut butter, and cinnamon</li><br></br>
                            <li>Lunch: a salad with greens, hard-boiled eggs, avocado, tomatoes, and balsamic vinaigrette </li><br></br>
                            <li>Dinner: black-bean soup with a dollop of Greek yogurt, whole-grain bread, and a side salad</li><br></br>
                            <li>Snack: almonds and dark chocolate</li><br></br>

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

export default Vegetarian