// Shapes invoices from the api repository for the web client. Field names mirror shared-schema.
export function toListItem(invoice) {
  return { id: invoice.id, amountCents: invoice.amountCents, currency: invoice.currency, status: invoice.status };
}

export function listOpenInvoices(invoices) {
  return invoices.filter((invoice) => invoice.status !== 'paid').map(toListItem);
}
