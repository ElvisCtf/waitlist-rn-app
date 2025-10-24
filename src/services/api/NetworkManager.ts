import ApiError from "./ApiError";

export default class NetworkManager {
  constructor(private baseUrl: string) {}

  async request<T>(endpoint: string, options: RequestInit): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
          try {
              const response = await fetch(`${this.baseUrl}${endpoint}`, options);
               if (!response.ok) {
                   reject(new ApiError(response.status, "Request failed"));
                  return;
              }
              const data = response.json() as T;
              resolve(data);
          } catch (err) {
            reject(new ApiError(-1, "Decode Failed"));
          }
      });
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: "GET" });
  }

  async post<T>(endpoint: string, body: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  }
}