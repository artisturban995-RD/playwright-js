import { test, expect } from '@playwright/test';
import { login } from '../helpers/LoginHelper';
import { AdminElements } from '../helpers/AdminElementsHelper';

test('Validacion de Elementos Admin', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await login(page);
    await page.getByRole('link', { name: 'Admin' }).click();
    await AdminElements(page);
});

