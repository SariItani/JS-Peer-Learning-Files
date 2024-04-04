document.addEventListener('DOMContentLoaded', function ()
{
    var checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () 
    {
        if (checkbox.checked) 
        {
            document.body.style.backgroundColor = "#AA0000";
        console.log('Checked');
        }
        else 
        {
            document.body.style.backgroundColor = "#442299";
        console.log('Not checked');
        }
    }
    );
}
);