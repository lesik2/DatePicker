import { ISize } from '@customTypes/index';
import styled, {css} from 'styled-components';

export const Wrapper = styled.div<{$size: ISize}>`
 ${({ theme, $size }) => css`
  height: ${theme.chooseSize($size).modalHeight}px;
  width: ${theme.chooseSize($size).widthCalendar}px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  align-items: flex-start;
  padding: 10px 5px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.border};
  background-color: ${theme.colors.secondary};
  position: relative;
`};
 
`
export const Title = styled.h3`
  ${({ theme }) => css`
  color: ${theme.colors.default};
  font-size: 19px;
  font-style: normal;
  font-weight: ${theme.fontWeight.bold};
  line-height: normal;
  margin: 0;

`};
`
export const EmptyMessage = styled.p`
  ${({ theme }) => css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${theme.colors.default};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`};
`
export const ListNotes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  height: 155px;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
`
export const NoteWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 250px;
`
export const NoteInput  = styled.input<{$size: ISize}>`
 ${({ theme, $size }) => css`
  color: ${theme.colors.default};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: ${theme.chooseSize($size).widthOfModalInput}px;
  height: 25px;
  outline: none;
  border:none;
  border-bottom: 1px solid ${theme.colors.border};
`};
`
export const Icon = styled.img`
  width: 100%;
  height: 100%;
`
export const RemoveBtn = styled.button`
 ${({ theme }) => css`
    width: 20px;
    height: 20px;
    border: none;
    outline: none;
    transition: transform 0.3s;
    padding: 0px;
    background-color: ${theme.colors.secondary};
    cursor: pointer;
    &:hover{
      transform: rotate(15deg);
    }
`};
`
export const AddBtn = styled.button`
  ${({ theme }) => css`
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 28px;
    height: 28px;
    border: none;
    outline: none;
    transition: transform 0.3s;
    padding: 0px;
    transform: rotate(45deg);
    background-color: ${theme.colors.secondary};
    cursor: pointer;
    &:hover{
     transform: scale(1.1) rotate(45deg);
    }
`};
`