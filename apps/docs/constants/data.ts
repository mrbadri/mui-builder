export const response = [
  /** فیلدهای یک فرم */
  {
    /** پیدا کردن گروه هدف
     * => values: fields | actions
     * => required
     */
    groupType: 'fields',
    /** پیدا کردن فیلد هدف
     * => required
     */
    type: 'text',
    /** این فیلد در چه فرمی ذخیره شود
     * => required
     */
    formId: 'karshenasi',
    /** ذخیره ی این فیلد با این ای دی انجام میگیرد
     * => required
     */
    id: 'nationalCode',
    /** عنوان نمایش این فیلد */
    label: 'کد ملی',
    /** متن پیش نمایش فیلد */
    placeholder: 'کد ملی خود را وارد کنید',
    /** ولیدیشن این فیلد */
    rule: {
      /** حداقل تعداد کارکتر برای این فیلد */
      minLength: {
        /** مقدا این ولیدیشن */
        value: 10,
        /** متن در صورت داشتن اررور در این ولیدیشن */
        message: 'کدملی باید 10 رقم باشد',
      },
      /** نوع دیگری از ولیدیشن */
      require: 'این فیلد اجباری می باشد',
    },
    /** هندل کردن ریسپانسیو */
    col: { xs: 12, md: 6, lg: 3 },
    /** کاستوم کردن استایل های این فیلد */
    sx: {
      width: '100%',
    },
  },
  /** --- --- --- --- --- --- --- --- --- --- */
  /** --- --- --- --- --- --- --- --- --- --- */
  /** --- --- --- --- --- --- --- --- --- --- */
  /** دکمه ی یک فرم */
  {
    /** پیدا کردن گروه هدف
     * => values: fields | actions
     * => required
     */
    groupType: 'actions',
    /** پیدا کردن نوع دکمه ی هدف
     * => required
     */
    type: 'submit',
    /** کدام فرم برای این دکمه به کار گرفته شود
     * => required
     */
    formId: 'karshenasi',
    /** عنوان نمایش این دکمه
     * => required
     */
    label: 'کد ملی',
    /** سایز این دکمه */
    size: 'small | medium | large',
    /** هندل کردن ریسپانسیو */
    col: { xs: 12, md: 6, lg: 3 },
    /** کاستوم کردن استایل های این فیلد */
    sx: {
      width: '100%',
    },
    /** هندل کردن وب سرویس پشت این دکمه */
    /** اگر این فیلد فرستاده نشود هیچ وب سرویسی کال نمی شود */
    api: {
      /** کانفیگ این وب سرویس */
      config: {
        /**   را دارد controller یو ار الی که برای این وب سرویس کال می شود و قابلیت استفاده از متغییر */
        /**  گذاشته شود و یو ار ال مورد نظر داخل استرینگ قرار بگیرد return کلمه ی */
        url: 'return "https://jsonplaceholder.typicode.com/todos/" + controller?.forms[controller.formId].getValues().FieldText1;',
        /** در این جا می توان کوری پارامز های مورد نیاز را ارسال کنید */
        params: { id: 1 },
        /** متد وب سرویس */
        method: 'post',
        /** بادی این وب سرویس */
        data: 'return controller?.forms[controller.formId].getValues();',
      },
      /** اپشن های مربوط به ری اکت کویری */
      query: {
        onError:
          " if (controller?.updateField) controller?.updateField({formId:controller?.formId, id:'multiSelect2' ,field: { label: 'testHook49999999'  }});",
      },
    },
    /** زمانی ک روی این دکمه کلیک می شود اسکریپت زیر کال می شود */
    onClick: 'return controller?.forms[controller.formId].getValues();',
  },
];
