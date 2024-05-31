import './App.css'
import CSSBox from './components/CSSBox'
import Boxes from './components/Boxes'
import Title from './components/Title'
import { cssCodeSnippets } from './helpers/codeSnippets.config'

function App() {
  return (
    <div className="flexbox-showcases">
      <Title className="page-title" label="FlexBox" />
      <div className="flexbox-elements-categories">
        <div className="parent-elements">
          <Title className="category-title" label="PARENT ELEMENT" text=" (flex container)" />
          <>
            <Title className="container-title" label="Flex Direction:" text="column,row,row-reverse" />
            <CSSBox cssCode={cssCodeSnippets.flexDirection} />
            <div className="show-cases-container">
              <div className='box-container flex-direction-column'>
                <span className='box-container__title'>column</span>
                <Boxes />
              </div>
              <div className='box-container flex-direction-row'>
                <span className='box-container__title'>row</span>
                <Boxes />
              </div>
              <div className='box-container flex-direction-row-reverse'>
                <span className='box-container__title'>row-reverse</span>
                <Boxes />
              </div>
            </div>
          </>
          <>
            <Title className="container-title" label="Justify Content:" text="flex-start,center,flex-end,space-between" />
            <CSSBox cssCode={cssCodeSnippets.justifyContent} />
            <div className="show-cases-container">
              <div className='box-container justify-content-start'>
                <span className='box-container__title'>flex-start</span>
                <Boxes />
              </div>
              <div className='box-container justify-content-center'>
                <span className='box-container__title'>center</span>
                <Boxes />
              </div>
              <div className='box-container justify-content-end'>
                <span className='box-container__title'>flex-end</span>
                <Boxes />
              </div>
              <div className='box-container justify-content-between'>
                <span className='box-container__title'>space-between</span>
                <Boxes />
              </div>
            </div>
            <Title className="container-title" label="Align Items:" text="flex-start,center,flex-end" />
            <CSSBox cssCode={cssCodeSnippets.alignItems} />
            <div className="show-cases-container">
              <div className='box-container align-items-start'>
                <span className='box-container__title'>flex-start</span>
                <Boxes />
              </div>
              <div className='box-container align-items-center'>
                <span className='box-container__title'>center</span>
                <Boxes />
              </div>
              <div className='box-container align-items-end'>
                <span className='box-container__title'>flex-end</span>
                <Boxes />
              </div>
            </div>
            <Title className="container-title" label="Gap:" text="column-gap,row-gap,gap" />
            <CSSBox cssCode={cssCodeSnippets.gap} />
            <div className="show-cases-container">
              <div className='box-container flex-direction-row gap-column-gap'>
                <span className='box-container__title'>column gap</span>
                <Boxes />
              </div>
              <div className='box-container flex-direction-column gap-row-gap'>
                <span className='box-container__title'>row-gap</span>
                <Boxes />
              </div>
            </div>
          </>
        </div>
        <div className="child-elements">
          <Title className="category-title" label="CHILD ELEMENT" text="(flex item)" />
          <>
            <Title className="container-title" label="Align Self" />
            <CSSBox cssCode={cssCodeSnippets.alignSelf} />
            <div className="show-cases-container">
              <div className='box-container flex-direction-row'>
                <span className='box-container__title'>align-self-end</span>
                <div className="box-1 box-title">
                  <p className="box__title">1</p>
                </div>
                <div className="box-2 box-title">
                  <p className="box__title">2</p>
                </div>
                <div className="box-3 box-title align-self">
                  <p className="box__title">3</p>
                </div>
              </div>
            </div>
          </>
          <>
            <Title className="container-title" label="Margin" />
            <CSSBox cssCode={cssCodeSnippets.margin} />
            <div className="show-cases-container">
              <div className='box-container flex-direction-row'>
                <span className='box-container__title'>margin-left</span>
                <div className="box-1 box-title">
                  <p className="box__title">1</p>
                </div>
                <div className="box-2 box-title">
                  <p className="box__title">2</p>
                </div>
                <div className="box-3 box-title margin">
                  <p className="box__title">3</p>
                </div>
              </div>
            </div>
          </>
          <>
            <Title className="container-title" label="Flex" />
            <CSSBox cssCode={cssCodeSnippets.flex} />
            <div className="show-cases-container">
              <div className='box-container flex-direction-row'>
                <span className='box-container__title'>flex</span>
                <div className="box-1 box-title">
                  <p className="box__title">1</p>
                </div>
                <div className="box-2 box-title">
                  <p className="box__title">2</p>
                </div>
                <div className="box-3 box-title align-self">
                  <p className="box__title">3</p>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>


  )
}

export default App
