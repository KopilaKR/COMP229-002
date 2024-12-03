const create = async (contact) => {
  try {
    let response = await fetch('/api/contacts/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const text = await response.text();
    if (!text) {
      throw new Error('Empty response');
    }

    const data = JSON.parse(text);
    return data;
  } catch (err) {
    console.error('Failed to create contact:', err);
    throw err; // Re-throw the error for further handling
  }
};

const list = async (signal) => {
  try {
    let response = await fetch('/api/contacts/', {
      method: 'GET',
      signal: signal
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const text = await response.text();
    if (!text) {
      throw new Error('Empty response');
    }

    const data = JSON.parse(text);
    return data;
  } catch (err) {
    console.error('Failed to fetch contacts:', err);
    throw err;
  }
};

const read = async (params, credentials, signal) => {
  try {
    let response = await fetch('/api/contacts/' + params.contactId, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const text = await response.text();
    if (!text) {
      throw new Error('Empty response');
    }

    const data = JSON.parse(text);
    return data;
  } catch (err) {
    console.error('Failed to read contact:', err);
    throw err;
  }
};

const update = async (params, credentials, contact) => {
  try {
    let response = await fetch('/api/contacts/' + params.contactId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: JSON.stringify(contact)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const text = await response.text();
    if (!text) {
      throw new Error('Empty response');
    }

    const data = JSON.parse(text);
    return data;
  } catch (err) {
    console.error('Failed to update contact:', err);
    throw err;
  }
};

const remove = async (params, credentials) => {
  try {
    let response = await fetch('/api/contacts/' + params.contactId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const text = await response.text();
    if (!text) {
      throw new Error('Empty response');
    }

    const data = JSON.parse(text);
    return data;
  } catch (err) {
    console.error('Failed to delete contact:', err);
    throw err;
  }
};

export { create, list, read, update, remove };
