import Tag from "@/components/ui/Tag";

export default function RecipeCard({ recipe, onClick }) {
  const { title, description, tags, time, images } = recipe;

  return (
    <button
      onClick={onClick}
      className="group text-left w-full rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="aspect-[4/3] bg-stone-100 w-full overflow-hidden">
        {images?.hero ? (
          <img
            src={images.hero}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone-300 text-sm">
            No image
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-stone-900 mb-1 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-stone-500 mb-4 leading-relaxed line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </button>
  );
}
