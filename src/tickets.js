/**
 * Returns a ticket object when given the name.
 * @param {Object[]} tickets An array of ticket objects
 * @param {String} name The name of a ticket
 * @returns The ticket object with a matching ID or `null` if no object is found.
 */
function getTicketByName(tickets, name) {
  // search for a ticket with the given name and return the ticket
  const result = tickets.find((ticket) => {
    return ticket.name.toLowerCase() === name.toLowerCase();
  });

  // if the ticket value is truthy, return it; otherwise, return null
  return result || null;
}

/**
 * Calculates a total based on the given ticket names.
 * @param {Object[]} tickets An array of ticket objects
 * @param {String[]} names An array of ticket names
 * @returns The total value of all tickets from the `names` array.
 */
function calculateTotalFromTicketNames(tickets, names) {
  // initialize a total variable to 0
  let total = 0;

  // loop through the names array
  for (let name of names) {
    // get the ticket that corresponds to name and set it to a var, ticket
    const ticket = getTicketByName(tickets, name);
    // if ticket is found
    if (ticket) {
      // add to the total
      total += ticket.priceInCents;
    }
  }
  return total;
}

module.exports = { getTicketByName, calculateTotalFromTicketNames };