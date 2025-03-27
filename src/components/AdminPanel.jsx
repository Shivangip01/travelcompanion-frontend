import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [places, setPlaces] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    name: '',
    country: '',
    description: '',
    best_time_to_visit: '',
    rating: '',
    things_to_do: '',
    local_food: '',
    must_visit_places: '',
    recommended_hotels: [{ name: '', price: '' }],
  });

  const fetchPlaces = async () => {
    const res = await axios.get('http://travelcompanion-backend-lb-1994745567.eu-west-1.elb.amazonaws.com/api/travel/places/');
    setPlaces(res.data);
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  const handleHotelChange = (index, field, value) => {
    const updatedHotels = [...form.recommended_hotels];
    updatedHotels[index][field] = value;
    setForm({ ...form, recommended_hotels: updatedHotels });
  };

  const addHotelField = () => {
    setForm({ ...form, recommended_hotels: [...form.recommended_hotels, { name: '', price: '' }] });
  };
  const handleSubmit = async () => {
    try {
      if (editingId) {
        await axios.put(`http://travelcompanion-backend-lb-1994745567.eu-west-1.elb.amazonaws.com/api/travel/places/${editingId}/`, form);
      } else {
        await axios.post(`http://travelcompanion-backend-lb-1994745567.eu-west-1.elb.amazonaws.com/api/travel/places/`, form);
      }
      fetchPlaces();
      setForm({
        name: '',
        country: '',
        description: '',
        best_time_to_visit: '',
        rating: '',
        things_to_do: '',
        local_food: '',
        must_visit_places: '',
        recommended_hotels: [{ name: '', price: '' }],
      });
      setEditingId(null);
    } catch (err) {
      console.error("Error saving place:", err);
    }
  };


  const handleDelete = async (id) => {
    await axios.delete(`http://travelcompanion-backend-lb-1994745567.eu-west-1.elb.amazonaws.com/api/travel/places/${id}/`);
    fetchPlaces();
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-white rounded-xl shadow space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">🛠️ Admin Panel — Manage Places</h2>

      <div className="space-y-4">
        {['name', 'country', 'description', 'best_time_to_visit', 'rating', 'things_to_do', 'local_food', 'must_visit_places'].map((field) => (
          <input
            key={field}
            className="w-full border p-2 rounded"
            placeholder={field.replaceAll('_', ' ').toUpperCase()}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          />
        ))}

        <div className="space-y-2">
          <label className="block font-medium text-gray-700">Recommended Hotels</label>
          {form.recommended_hotels.map((hotel, index) => (
            <div key={index} className="flex gap-2">
              <input
                className="w-1/2 border p-2 rounded"
                placeholder="Hotel Name"
                value={hotel.name}
                onChange={(e) => handleHotelChange(index, 'name', e.target.value)}
              />
              <input
                className="w-1/2 border p-2 rounded"
                placeholder="Price"
                value={hotel.price}
                onChange={(e) => handleHotelChange(index, 'price', e.target.value)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addHotelField}
            className="text-blue-600 hover:underline mt-2"
          >
            + Add another hotel
          </button>
        </div>
        <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
            >
            {editingId ? "Update Place" : "Add Place"}
        </button>
        {/* <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
        >
          Add Place
        </button> */}
      </div>
      <ul className="space-y-2 pt-6">
        {places.map((place) => (
            <li
            key={place.id}
            className="flex justify-between items-center border p-2 rounded bg-gray-50"
            >
            <span>{place.name}</span>
            <div className="space-x-3">
                <button
                onClick={() => {
                    setForm(place);
                    setEditingId(place.id);
                }}
                className="text-blue-600 hover:underline"
                >
                Edit
                </button>
                <button
                onClick={() => handleDelete(place.id)}
                className="text-red-500 hover:underline"
                >
                Delete
                </button>
            </div>
            </li>
        ))}
        </ul>
      {/* <ul className="space-y-2 pt-6">
        {places.map((place) => (
          <li
            key={place.id}
            className="flex justify-between items-center border p-2 rounded bg-gray-50"
          >
            <span>{place.name}</span>
            <button
              onClick={() => handleDelete(place.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default AdminPanel;
