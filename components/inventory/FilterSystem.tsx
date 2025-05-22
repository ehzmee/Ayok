import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FilterX } from 'lucide-react';

type FilterSystemProps = {
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  sortOption: string;
  setSortOption: (value: string) => void;
  clearFilters: () => void;
  categories: string[];
};

export default function FilterSystem({
  categoryFilter,
  setCategoryFilter,
  sortOption,
  setSortOption,
  clearFilters,
  categories,
}: FilterSystemProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="w-full sm:w-48">
            <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger id="category-filter" className="w-full">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full sm:w-48">
            <label htmlFor="sort-options" className="block text-sm font-medium text-gray-700 mb-1">
              Sort By
            </label>
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger id="sort-options" className="w-full">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                <SelectItem value="price-low-high">Price: Low to High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex justify-end mt-2 md:mt-0">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearFilters}
            className="text-amber-800 border-amber-200 hover:bg-amber-50"
          >
            <FilterX className="h-4 w-4 mr-2" />
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  );
}