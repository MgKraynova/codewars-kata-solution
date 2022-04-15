// https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript

function PaginationHelper(collection, itemsPerPage) {
    this.itemsPerPage = itemsPerPage;
    this.itemNumber = collection.length;
    this.numberOfPages = Math.ceil(this.itemNumber / itemsPerPage);
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
    console.log('число элементов всего', this.itemNumber);
    return this.itemNumber;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    console.log('число необходимых страниц', this.numberOfPages);
    return this.numberOfPages;
}

// // returns the number of items on the current page. page_index is zero based.
// // this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {

    // 1. Проверяем, есть ли такая страница в книге
    if (pageIndex > this.numberOfPages - 1) {
        console.log('такой страницы в книге нет, поэтому возвращаем -1');
        return -1;
    } else {
        // 2. Такая страница в книге есть

        // 2.1. Если в книге 1 страница, то число элементов на ней будет равно общему числу элементов
        if (this.numberOfPages === 1) {
            const result = this.itemNumber;
            console.log('на искомой странице размещено', result, 'элементов');
            return result;
        } else if (!(pageIndex === (this.numberOfPages - 1))) {
            // 2.2. Если страница не последняя, то число элементов на ней будет равно числу элементов на странице
            console.log('страница не последняя, поэтому на ней размещено', this.itemsPerPage, 'элементов');
            return this.itemsPerPage;
        } else {
            // 2.3. Если страница последняя, то число элементов на ней будет равно разнице между общим числом элементов
            // и числом элементов на предыдущих страницах
            const numberOfPreviousPages = pageIndex;
            const result = this.itemNumber - (numberOfPreviousPages * this.itemsPerPage);
            console.log('страница последняя, на ней размещено', result, 'элементов');
            return result;
        }
    }


}

// // determines what page an item is on. Zero based indexes
// // this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
    // 1. Проверяем, есть ли такой элемент в книге
    if ((itemIndex >= this.itemNumber) || (itemIndex < 0)) {
        console.log('этого элемента нет в книге, поэтому возвращаем -1');
        return -1;
    } else {
        // 2. Если элемент есть в книге, то индекс элемента делим на количество элементов на странице,
        // округляем в меньшую сторону
        console.log('итоговый результат', Math.floor(itemIndex / this.itemsPerPage));
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}