import {test, expect} from 'playwright/test';

// test ('test page eshoppenow of STYL', async ({page}) => {
//     // Step 1: Go to the Eshoppenow website
//     await page.goto('https://eshoppenow.com');
//     // Step 2: Verify the title of the page
//     await expect(page).toHaveTitle(/eShoppeNow/);
// });

test ('test page eshoppenow of STYL', async ({page}) => {
    await page.goto('https://eshoppenow.com');

    await expect(page).toHaveTitle('eShoppeNow');

    // Click vào nút Search (giả sử role là 'button' và name là 'Search')
    const searchBtn = page.getByRole('button', { name: /search/i });
    await searchBtn.click();
});



