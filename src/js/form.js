(function () {
    const onFormHandler = (selector, rules, messages) => {
      new window.JustValidate(selector, {
        rules: rules,
        messages: messages,
        submitHandler: function (form, values, ajax) {
        let formData = new FormData(form);
        const objForm = {};
        formData.forEach((key, value) => {
        objForm[value] = key;
        });
           fetch("mailer/smart.php", {
             method: "POST",
             body: formData,
           }).then((data) => {
             if (data.ok) {
               alert(`Thank you ${objForm.name} Your order will be delivered to ${objForm.street} ${objForm.house}/${objForm.flat}`)
             } else {
               alert(
                 `Sorry, there is an error ${data.status} ${data.statusText}`
               );
             }
             form.reset();
           });
        },
      });
    };

    onFormHandler(
      ".form",
      {
        name: { required: true },
        phone: { required: true },
        street: { required: true },
        house: { required: true },
        flat: { required: true },
      },
      {
        name: "The name is required",
        phone: "Phone number required",
        street: "Street is required",
        house: "House number required",
        flat: "Flat number required",
      }
    );

}())