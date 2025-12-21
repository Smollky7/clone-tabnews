test("GET to /api/v1/status shoule return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBoby = await response.json();

  const parserUpdateAt = new Date(responseBoby.updated_at).toISOString();
  expect(responseBoby.updated_at).toEqual(parserUpdateAt);

  expect(responseBoby.dependecies.database.version).toEqual("16.0");
  expect(responseBoby.dependecies.database.max_connections).toEqual(100);
  expect(responseBoby.dependecies.database.opened_connections).toEqual(1);
});