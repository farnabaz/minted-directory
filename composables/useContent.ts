import type { LayoutKey } from "#build/types/layouts"
import type { PageCollectionItemBase } from "@nuxt/content"

export const useContent = (data?: PageCollectionItemBase | null) => {
  const page = useState<PageCollectionItemBase & { layout?: string, featured?: boolean } | null>('page', () => null)
  const layout = computed(() => (page.value?.layout || 'wide') as LayoutKey)

  if (data !== undefined) {
    page.value = data
  }


  return {
    page,
    layout,
  }
}