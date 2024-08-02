import { type ShelfId, type BookID, type OrderId } from '../../adapter/assignment-4'
import { InMemoryWarehouse, type WarehouseData } from './warehouse_data'

export async function removeBooksFromShelves ( data: WarehouseData, book: BookID, shelf: ShelfId, numberOfBooks: number): Promise<void> {

    const currentCopiesOnShelf = await data.getCopiesOnShelf(book, shelf)
    const newCopiesOnShelf = currentCopiesOnShelf - numberOfBooks
    if (newCopiesOnShelf < 0) {
      throw new Error('not enough copies on given shelves')
    }
    await data.placeBookOnShelf(book, shelf, numberOfBooks)
}