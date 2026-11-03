/* Application fields and sample data. MIT License. */
const SPEC={
  "id": "A04",
  "slug": "sku-matrix",
  "name": "商品SKU与上架表整理器",
  "desc": "批量生成规格组合，按自定义列名导出商品上架表。",
  "fields": [
    {
      "key": "prefix",
      "label": "SKU前缀",
      "type": "text",
      "value": "CUP"
    },
    {
      "key": "title",
      "label": "商品名称",
      "type": "text",
      "value": "旅行水杯"
    },
    {
      "key": "colors",
      "label": "颜色（每行一个）",
      "type": "textarea",
      "value": "黑色\n白色"
    },
    {
      "key": "sizes",
      "label": "规格（每行一个）",
      "type": "textarea",
      "value": "350ml\n500ml"
    },
    {
      "key": "price",
      "label": "销售单价",
      "type": "number",
      "value": 29.9,
      "min": 0
    },
    {
      "key": "stock",
      "label": "每个规格的库存",
      "type": "number",
      "value": 20,
      "min": 0
    }
  ],
  "tables": [
    {
      "key": "mapping",
      "label": "导出列映射",
      "columns": [
        {
          "key": "source",
          "label": "来源字段",
          "type": "select",
          "options": [
            "sku",
            "title",
            "color",
            "size",
            "price",
            "stock"
          ]
        },
        {
          "key": "target",
          "label": "目标列名",
          "type": "text"
        }
      ],
      "rows": [
        {
          "source": "sku",
          "target": "SKU"
        },
        {
          "source": "title",
          "target": "标题"
        },
        {
          "source": "color",
          "target": "颜色"
        },
        {
          "source": "size",
          "target": "容量"
        },
        {
          "source": "price",
          "target": "售价"
        },
        {
          "source": "stock",
          "target": "库存"
        }
      ]
    }
  ],
  "dirname": "sku-matrix",
  "example": {
    "_files": {},
    "prefix": "CUP",
    "title": "旅行水杯",
    "colors": "黑色\n白色",
    "sizes": "350ml\n500ml",
    "price": 29.9,
    "stock": 20,
    "mapping": [
      {
        "source": "sku",
        "target": "SKU"
      },
      {
        "source": "title",
        "target": "标题"
      },
      {
        "source": "color",
        "target": "颜色"
      },
      {
        "source": "size",
        "target": "容量"
      },
      {
        "source": "price",
        "target": "售价"
      },
      {
        "source": "stock",
        "target": "库存"
      }
    ]
  },
  "inputTitle": "商品规格",
  "outputTitle": "SKU明细",
  "action": "生成SKU"
};
