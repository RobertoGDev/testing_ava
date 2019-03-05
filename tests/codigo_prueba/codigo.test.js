import test from 'ava';
import sum from './codigo';
import browserEnv from 'browser-env';
browserEnv();

test('La suma debería devolver 5', async test => {
  const result = await sum.suma(2, 3);
  test.is(result, 5, "operación válida");
});

test('La resta debería devolver 1', async test => {
  const result = await sum.resta(4, 3);
  test.is(result, 1, "operación válida");
});

test('La multiplicación debería devolver 30', async test => {
  const result = await sum.multiplicacion(6, 5);
  test.is(result, 30, "operación válida");
});



/* EJEMPLOS DE TEST

test('Insert to DOM', t => {
	const div = document.createElement('div');
	document.body.appendChild(div);

	t.is(document.querySelector('div'), div);
});


test('foo is being tested', test => {
  test.pass();
})

test('bar is being tested', async test => {
  const bar = Promise.resolve('bar');
  test.is(await bar, 'bar');
});

test('sum of 2 numbers', test => {
  test.plan(2);
  test.pass('this assertion passed');
  test.is(sum(1, 2), 3);
}) 

*/