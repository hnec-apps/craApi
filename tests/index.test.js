const Page = require('./helpers/page');

let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto('http://localhost:5000');
});

afterEach(async () => {
  await page.close();
});

describe('When logged in', async () => {
  beforeEach(async () => {
    await page.login();
    await page.click('a.btn-floating');
  });

  test('can see  create form', async () => {
    const label = await page.getContentsOf('form label');

    expect(label).toEqual('Blog Title');
  });


});

describe('User is not logged in', async () => {
  const actions = [{
      method: 'get',
      path: ''
    },
    {
      method: 'post',
      path: '',
      data: {
        title: 'T',
        content: 'C'
      }
    }
  ];

  test(' related actions are prohibited', async () => {
    const results = await page.execRequests(actions);

    for (let result of results) {
      expect(result).toEqual({
        error: 'You must log in!'
      });
    }
  });
});