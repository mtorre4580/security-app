document.addEventListener('DOMContentLoaded', () => {

    getAllParticipants()
    .then(participants => document.querySelector('table tbody').innerHTML = generateRow(participants))
    .catch(() => alert('se produjo un error!!!'));

});

const generateRow = participants =>  {
    let element = '';
    participants.forEach(p => {
        element+= `<tr><td>${p['NAME']}</td><td>${p['LASTNAME']}</td><td>${p['DNI']}</td><td>${p['EMAIL']}</td><td>${p['TEAM']}</td></tr>`;
    });
    return element;
}

const getAllParticipants = async () => {
    const response = await fetch('/api/participants', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Token': '42e7a9400b81'
    }
  });
  return await response.json();
}