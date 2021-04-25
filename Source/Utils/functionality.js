/**
 * This function allows us to manage the pagination.
 *
 * @param {string} url - Self Url.
 * @param {string} page - Page number Limit + Skip.
 * @returns {string} URL - URL with limit and skip option.
 */
function parse_url_page(url, page) {
    const skip = page !== 0 ? `skip=${page}` : "";
    const limit = `limit=10`;
    // eslint-disable-next-line no-param-reassign
    page = parseInt(page, 10) >= 0 ? page : 0;
    const skip_url = url.indexOf("?") > -1 ? `&${skip}` : `?${skip}`;
    const limit_url = url.indexOf("?") > -1 ? `&${limit}` : `?${limit}`;
    const value =
        url.indexOf("skip=") > -1
            ? url.replace(/skip=[^&]+/, `skip=${page}`)
            : url + skip_url + limit_url;
    return value;
}

module.exports = {
    parse_url_page,
};
