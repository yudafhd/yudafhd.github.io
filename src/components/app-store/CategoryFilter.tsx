"use client";

type CategoryFilterProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="no-scrollbar flex items-center gap-2 overflow-x-auto py-2">
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`ios-active whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              isSelected
                ? "bg-[#007aff] text-white shadow-sm"
                : "bg-white text-[#1c1c1e] ring-1 ring-[#e5e5ea] hover:bg-[#f2f2f7]"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
