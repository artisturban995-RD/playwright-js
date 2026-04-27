import { login } from '../helpers/LoginHelper';
const { test, expect } = require('@playwright/test');
const { allure } = require('allure-playwright');

// Datos de prueba
const nombres = ["Juan", "María", "Carlos", "Ana", "Luis", "Elena", "Pedro", "Sofía"];
const apellidos = ["García", "Rodríguez", "López", "Martínez", "Sánchez", "Pérez"];

test('Agregar 10 empleados con datos aleatorios', async ({ page }) => {
  const empleadosAgregados = [];

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await login(page);
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  
  for (let i = 0; i < 10; i++) {
    // Generar datos aleatorios
    const nombre = nombres[Math.floor(Math.random() * nombres.length)];
    const apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
  

    // Rellenar formulario
    await page.getByRole('textbox', { name: 'First Name' }).fill(nombre);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(apellido);
    await page.getByRole('button', { name: 'Save' }).click();

    // Esperar a que se complete el proceso (ajusta según tu caso)
    await page.waitForTimeout(10000);

    // Registrar empleado agregado
    empleadosAgregados.push({
      nombre: nombre,
      apellido: apellido
    });

    console.log(`Empleado agregado: ${nombre} ${apellido}`);

    await page.getByRole('listitem').filter({ hasText: 'Add Employee' }).click();
  }

  // Mostrar tabla de empleados agregados
  console.log('\n=== RESUMEN DE EMPLEADOS AGREGADOS ===');
  console.table(empleadosAgregados);
});

test('verificacion negativa de reporte vacio', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await login(page);
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Reports' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'Type here' }).fill('reporte');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('WarningAt least one display field should be added×')).toBeVisible();
});