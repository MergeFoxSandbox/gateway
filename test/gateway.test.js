import { test } from 'node:test';
import assert from 'node:assert/strict';
import { listOpenInvoices, toListItem } from '../src/gateway.js';

const invoice = { id: 'inv_1', customerId: 'cus_1', amountCents: 1250, currency: 'USD', status: 'sent' };

test('toListItem keeps only the list fields', () => {
  assert.deepEqual(toListItem(invoice), { id: 'inv_1', amountCents: 1250, currency: 'USD', status: 'sent' });
});

test('listOpenInvoices drops paid invoices', () => {
  assert.deepEqual(listOpenInvoices([invoice, { ...invoice, id: 'inv_2', status: 'paid' }]).map((i) => i.id), ['inv_1']);
});
