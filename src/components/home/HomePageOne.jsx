// react
import React, { useMemo } from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// application
import shopApi from '../../api/shop';
import { useDeferredData } from '../../services/hooks';

// blocks
import BlockBrands from '../blocks/BlockBrands';
import BlockFeatures from '../blocks/BlockFeatures';
import BlockPosts from '../blocks/BlockPosts';
import BlockProducts from '../blocks/BlockProducts';
import BlockSlideShow from '../blocks/BlockSlideShow';

// data stubs
import posts from '../../data/blogPosts';
import theme from '../../data/theme';

function HomePageOne() {
  /**
   * Bestsellers.
   */
  const bestsellers = useDeferredData(
    () => shopApi.getPopularProducts({ limit: 7 }),
    []
  );

  console.log(bestsellers);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Home Page One — ${theme.name}`}</title>
      </Helmet>

      {useMemo(
        () => (
          <BlockSlideShow withDepartments />
        ),
        []
      )}

      {useMemo(
        () => (
          <BlockFeatures />
        ),
        []
      )}

      {useMemo(
        () => (
          <BlockProducts
            title="Instrumentation"
            layout="large-first"
            products={bestsellers.data.slice(1, 7)}
          />
        ),
        [bestsellers.data]
      )}

      {useMemo(
        () => (
          <BlockProducts
            title="Electricité"
            layout="large-first"
            products={bestsellers.data.slice(1, 7)}
          />
        ),
        [bestsellers.data]
      )}

      {useMemo(
        () => (
          <BlockProducts
            title="Robinnetterie"
            layout="large-first"
            products={bestsellers.data.slice(1, 7)}
          />
        ),
        [bestsellers.data]
      )}

      {useMemo(
        () => (
          <BlockProducts
            title="Flexible Et Raccord Hydrolique"
            layout="large-first"
            products={bestsellers.data.slice(1, 7)}
          />
        ),
        [bestsellers.data]
      )}

      {useMemo(
        () => (
          <BlockPosts title="Latest News" layout="list-sm" posts={posts} />
        ),
        []
      )}

      {useMemo(
        () => (
          <BlockBrands />
        ),
        []
      )}
    </React.Fragment>
  );
}

export default HomePageOne;
