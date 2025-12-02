import { Fragment } from 'react/jsx-runtime'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../base/breadcrumb'
import { PageDataT } from '../layout/appSidebarPages'



type AppBreadCrumbPropsT = {
  items: PageDataT[]
}

export function AppBreadCrumb({ items }: AppBreadCrumbPropsT) {

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items && items.map((item, idx) => (
          <Fragment key={idx}>
            {items.at(idx + 1)?.title ? (
              <Fragment>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href={item.path}>{item.title}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
              </Fragment>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbPage>{item.title}</BreadcrumbPage>
              </BreadcrumbItem>
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
