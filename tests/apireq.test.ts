import { test, expect } from '@playwright/test';

test('GET request - Fetch a user', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.data).toHaveProperty('id', 2);
    expect(responseBody.data).toHaveProperty('email');
});
