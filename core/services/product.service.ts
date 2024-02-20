import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://vitalzeo.com.ar/crud/',
  // Aquí puedes agregar otras opciones de configuración de Axios según tus necesidades
});

const getOffersData = async (data:string) => {
  try {
    const response = await apiService.get(`/getOffersByCategory.php?category=${data}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener los datos del endpoint');
  }
};

export default {getOffersData}