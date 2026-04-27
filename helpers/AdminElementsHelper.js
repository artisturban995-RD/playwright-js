import { expect } from "@playwright/test";

export async function AdminElements(page) {
  await expect(page.getByRole('listitem').filter({ hasText: 'User Management' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Job' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Organization' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Qualifications' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Nationalities' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Corporate Branding' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Configuration' })).toBeVisible();
  await expect(page.getByTitle('Help')).toBeVisible();
  await expect(page.getByText('System UsersUsernameUser Role')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Username$/ }).nth(2)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^User Role$/ })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Employee Name$/ }).nth(2)).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Type for hints...' })).toBeVisible();
  await expect(page.getByText('Status-- Select --')).toBeVisible();
  await expect(page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Reset' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Add' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^AdminUser Management$/ })).toBeVisible();
};