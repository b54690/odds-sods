import { JsonController, Post, HttpCode, Get, Param, Put, Body, NotFoundError } from 'routing-controllers'
import Page from './entity'


@JsonController()
export default class PageController {
//retrieve page by id number
    @Get('/pages/:id')
    getPage(
      @Param('id') id: number
    ) {
      return Page.findOne(id)
    }
//retrieve all pages
    @Get('/pages')
    async allPages() {
    const pages = await Page.find()
    return { pages }
}

//edit a page
    @Put('/pages/:id')
    async updatePage(
        @Param('id') id: number,
        @Body() update: Partial<Page>
    ){
        const page = await Page.findOne(id)
        if (!page) throw new NotFoundError('Cannot find page')

        return Page.merge(page, update).save()
    }

//create a page / ad

    @Post('/pages')
    @HttpCode(201)
    createPage(
        @Body() page: Page
    ){
        return page.save()
    }

}
