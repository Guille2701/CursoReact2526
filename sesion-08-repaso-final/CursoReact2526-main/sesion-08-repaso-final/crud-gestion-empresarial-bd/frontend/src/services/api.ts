import { get } from "http";
import type { AuthResponse, Company, Contact, CreateCompanyDTO, LoginDTO, RegisterDTO, UpdateCompanyDTO, User } from "../types";
import { register } from "module";

// [companies]
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

/**
 * Helper para obtener headers con token si existe
 */
function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // Si hay token en localStorage, añadirlo al header
  const token = localStorage.getItem('token');
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

// ========================================
// EMPRESAS (COMPANIES)
// ========================================

export const companiesAPI = {
  /**
   * Obtener todas las empresas
   */
  async getAll(): Promise<{ companies: Company[]; total: number }> {
    const response = await fetch(`${API_URL}/companies`, {
      headers: getHeaders(),
    });
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: "Error desconocido" }));
      throw new Error(error.message || `Error ${response.status}`);
    }
    return response.json();
  },

  /**
   * Obtener una empresa por ID
   */
  async getById(id: number): Promise<{ company: Company }> {
    const response = await fetch(`${API_URL}/companies/${id}`, {
      headers: getHeaders(),
    });
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: "Error desconocido" }));
      throw new Error(error.message || `Error ${response.status}`);
    }
    return response.json();
  },

  /**
   * Crear una nueva empresa
   */
  async create(
    data: CreateCompanyDTO,
  ): Promise<{ message: string; company: Company }> {
    const response = await fetch(`${API_URL}/companies`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: "Error desconocido" }));
      throw new Error(error.message || `Error ${response.status}`);
    }
    return response.json();
  },

  /**
   * Actualizar una empresa
   */
  async update(
    id: number,
    data: UpdateCompanyDTO,
  ): Promise<{ message: string; company: Company }> {
    const response = await fetch(`${API_URL}/companies/${id}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: "Error desconocido" }));
      throw new Error(error.message || `Error ${response.status}`);
    }
    return response.json();
  },

  /**
   * Eliminar una empresa
   */
  async delete(id: number): Promise<{ message: string }> {
    const response = await fetch(`${API_URL}/companies/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: "Error desconocido" }));
      throw new Error(error.message || `Error ${response.status}`);
    }
    return response.json();
  },

  /**
   * Obtener contactos de una empresa
   */
  async getContacts(
    id: number,
  ): Promise<{
    company: { id: number; name: string };
    contacts: Contact[];
    total: number;
  }> {
    const response = await fetch(`${API_URL}/companies/${id}/contacts`, {
      headers: getHeaders(),
    });
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: "Error desconocido" }));
      throw new Error(error.message || `Error ${response.status}`);
    }
    return response.json();
  },
};


// ========================================
// USUARIOS (USERS)
// ========================================


export const authAPI = {



  //login
  async login(data:LoginDTO): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Error al iniciar sesion`);
    }
    return response.json();
  
  },


  // getMe
  async getMe(): Promise<{ user:User }> {
    const response  = await fetch(`${API_URL}/auth/me`, {
      method: "GET",
      headers: getHeaders(),
    });
    if (!response.ok) {
      throw new Error(`Error al obtener el usuario`);
    }
    return response.json();
    

  },


  // registro
  async register(data:RegisterDTO): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Error al registrar el usuario`);
    }
    return response.json();
  },

  
    




}