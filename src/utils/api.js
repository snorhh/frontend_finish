const fetchCustomers = async () => {

  const response = await fetch('https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers');
  const data = await response.json();

  return data._embedded.customers
};

const addCustomer = async (customer) => {
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer)
  }


  const response = await fetch('https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers', options);

  const data = await response.json();
  return data;
}

const deleteCustomer = async (url) => {

  const options = {
    method: "DELETE"
  }

  if (confirm("Are you sure you want to delete this customer?")) {
    return fetch(url, options);
  }
}

const updateCustomer = async ({ url, customer }) => {
  const options = {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer)
  }
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

const addTraining = async (training) => {
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(training)
  }

  const response = await fetch('https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/trainings', options);
  const data = await response.json();
  return data;
}

    const fetchTrainings = async () => {
 
      const response = await fetch('https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/gettrainings');

      return await response.json();
          

}

const deleteTraining = async (id) => {

  const options = {
      method: "DELETE"
  }

    if (confirm("Are you sure you want to delete this training?")) {

      return fetch(`https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/trainings/${id}`, options);
          
      }
   
}

export { fetchCustomers, addCustomer, deleteCustomer, updateCustomer, fetchTrainings, addTraining, deleteTraining };