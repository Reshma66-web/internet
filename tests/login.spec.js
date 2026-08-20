import {test} from "@playwright/test"

test('login',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/login")
    await page.locator('#username').fill("tomsmith")
    await page.locator('#password').fill("SuperSecretPassword!")
    await page.locator('//button[@class="radius"]').click()
    // TM2
})