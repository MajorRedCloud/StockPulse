import TradingViewWidget from "@/components/TradingViewWidget";
import { Button } from "@/components/ui/button";
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from "@/lib/constants";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-4 md:gap-10 items-center sm:items-start">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget 
            title="Market Overview"
            scriptURL="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            height={600}
            className="custom-chart"
          />
        </div>

        <div className="md:col-span-1 xl:col-span-2">
          <TradingViewWidget 
            title="Stock Heatmap"
            scriptURL="https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js"
            config={HEATMAP_WIDGET_CONFIG}
            height={600}
            className="custom-chart"
          />
        </div>
      </section>

      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingViewWidget 
            scriptURL="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js"
            config={TOP_STORIES_WIDGET_CONFIG}
            height={600}
            className="custom-chart"
          />
        </div>

        <div className="h-full md:col-span-1 xl:col-span-2">
          <TradingViewWidget 
            scriptURL="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
            config={MARKET_DATA_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
    </div>
  );
}
