import { ListingRequest, ListingResponse, IVendor } from '@models';
import { BaseService } from './base-service';

class VendorService {
  async getVendors(request: ListingRequest): Promise<ListingResponse<IVendor>> {
    return await BaseService.get<ListingRequest, ListingResponse<IVendor>>(
      'vendors',
      false,
      {
        params: {
          page: (request.offset || 0) + 1,
          limit: request.limit,
        },
      }
    );
  }

  async createVendor(payload: IVendor) {
    return await BaseService.post<IVendor, boolean>('vendors', payload);
  }

  async loadSuggest(query: string): Promise<any> {
    const response = await BaseService.get<string, ListingResponse<IVendor>>(
      'vendors',
      false,
      {
        params: {
          name: query,
          page: 1,
          limit: 10,
        },
      }
    );

    return response.data.map((item) => ({
      id: item.id,
      name: item.name,
    }));
  }
}

export default new VendorService();
