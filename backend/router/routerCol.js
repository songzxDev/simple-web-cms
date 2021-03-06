const column = require('../server/column.js')
module.exports = [
    {
        method: 'post',
        url: '/admin/upColumn',
        middleware: column.upColumn
    },
    {
        method: 'get',
        url: '/admin/getColList',
        middleware: column.getColList
    },
    {
        method: 'get',
        url: '/admin/editColumn',
        middleware: column.editColumn
    },
    {
        method: 'post',
        url: '/admin/preCreateCol',
        middleware: column.preCreateCol
    },
    {
        method: 'get',
        url: '/admin/withBuildCol',
        middleware: column.withBuildCol
    },
    {
        method: 'get',
        url: '/admin/checkUltimate',
        middleware: column.checkUltimate
    },
    {
        method: 'get',
        url: '/admin/changeUltimate',
        middleware: column.changeUltimate
    },
    {
        method: 'get',
        url: '/admin/getCoverTempList',
        middleware: column.getCoverTempList
    },
    {
        method: 'get',
        url: '/admin/getListTempList',
        middleware: column.getListTempList
    },
    {
        method: 'get',
        url: '/admin/getContentTempList',
        middleware: column.getContentTempList
    },
    {
        method: 'get',
        url: '/admin/buildFaCol',
        middleware: column.buildFaCol
    },
    {
        method: 'post',
        url: '/admin/checkColAlias',
        middleware: column.checkColAlias
    }
]