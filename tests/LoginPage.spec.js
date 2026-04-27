import { test, expect } from '@playwright/test';

test('verificacion de login positiva', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});

test('verificacion de login negativa', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Ramon123');
  await page.getByRole('textbox', { name: 'Password' }).fill('Contraseña123');
  await page.getByRole('button', { name: 'Login' }).click();
});

test('prueba negativa de login sin credenciales', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
});

test('recuperacion de contraseña negativa sin credenciales', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByText('Forgot your password?').click();
  await page.getByRole('textbox', { name: 'Username' }).fill('ramon123');
  await page.getByRole('button', { name: 'Reset Password' }).click();
});