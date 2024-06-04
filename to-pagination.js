const ToPagination = (page_number, page_limit, data) => {
  const items = [...data];
  const last_page = Math.ceil(data.length / page_limit);
  let page = ~~page_number;

  if (!page) {
    page = 1;
  }

  if (page > last_page) {
    page = last_page;
  }

  return {
    page_number: page,
    last_page,
    data: items.slice(page * page_limit - page_limit, page * page_limit),
  };
};

module.exports = {
  ToPagination,
};
