
        
        async function fetchData() {
          const response = await fetch('https://passwordinator.onrender.com?num=true&char=true&caps=true&len=18');
          const data = await response.json();//If I had a hugr list of predetermined passwords, I would need to use .then and ossible .map to parse through, however since this is a randomized tool, I did not need to as there would be no array of objects.
          const container = document.getElementById('container');
            container.innerHTML = JSON.parse(JSON.stringify(data.data)); // I spent 3 hours finding out how to make the code above display the password without the word "data" from the API. The simple fix was to add ".data" as the argument. Was originally container.innerHTML = JSON.stringify(data);
            //I was able to apply this to the code, to remove the quotiations surrounding the data, which is from the API/JSON file. - const users = JSON.parse(JSON.stringify(data));
            
            const refreshButton = document.getElementById('refresh');
            refreshButton.addEventListener('click', fetchData);
            
            const copyButton = document.getElementById('copy');
            copyButton.addEventListener('click', () => {
                navigator.clipboard.writeText(data.data) //holy moly! This took me forever to figure out. My main thought was that "container" should be used instead of data.data) but the copied value was "[object HTMLDivElement]" which is the name of the object? of the container  variable
                  .then(() => console.log('Text copied to clipboard'))
                  .catch(error => console.error('Failed to copy text: ', error));
              });
              document.body.appendChild(button);

        }
      
        fetchData();


