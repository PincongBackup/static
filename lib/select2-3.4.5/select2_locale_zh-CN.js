$.fn.select2.amd.define('select2/i18n/zh',[],function () {
    // Russian
    return {
        errorLoading: function () {
            return '...';
        },
        inputTooLong: function (args) {
            var overChars = args.input.length - args.maximum;
            var message = '字数超出了' + overChars + '字';
            return message;
        },
        inputTooShort: function (args) {
            var remainingChars = args.minimum - args.input.length;

            var message = '';

            return message;
        },
        loadingMore: function () {
            return '加载更多...';
        },
        maximumSelected: function (args) {
            var message = '字数不超过' + args.maximum + '字';

            return message;
        },
        noResults: function () {
          return '很抱歉，没有搜到结果';
        },
        searching: function () {
          return '搜索中...';
        }
    };
});
