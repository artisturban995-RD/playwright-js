import { test, expect } from '@playwright/test';
import { login } from '../helpers/LoginHelper';

test('verificacion negativa de tiempo de empleado sin especicar empleado', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await login(page);
  await page.getByRole('link', { name: 'Time' }).click();
  await page.locator('form').getByRole('button', { name: 'View' }).click();
  await expect(page.getByText('Required', { exact: true })).toBeVisible();
});